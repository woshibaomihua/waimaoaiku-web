import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const hmac = crypto.createHmac("sha256", process.env.LEMON_SQUEEZY_WEBHOOK_SECRET!);
    const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
    const signature = Buffer.from(req.headers.get("x-signature") || "", "utf8");

    // 1. 验证 Webhook 签名是否合法（防止他人伪造支付成功通知）
    if (!crypto.timingSafeEqual(digest, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const payload = JSON.parse(rawBody);
    const eventName = payload.meta.event_name;

    // 2. 处理支付成功事件
    if (eventName === "order_created") {
      const order = payload.data.attributes;
      const userEmail = order.user_email;
      const productId = order.first_order_item.variant_id;

      console.log(`✅ 支付成功！用户: ${userEmail}, 脚本ID: ${productId}`);
      
      // 在此处你可以：
      // - 写入 Supabase 数据库
      // - 调用你的发信 API 给用户发货
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
