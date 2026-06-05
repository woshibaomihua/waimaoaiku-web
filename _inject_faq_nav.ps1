Set-Location 'C:\Users\Jacken\aerlune-deploy'
$files = Get-ChildItem -Filter '*.html' | Where-Object { $_.Name -ne 'faq.html' -and $_.Name -ne 'thank-you.html' }
$old = '<a href="./blog.html">Blog</a><a href="https://api.whatsapp'
$new = '<a href="./blog.html">Blog</a><a href="./faq.html">FAQ</a><a href="https://api.whatsapp'
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    if ($content.Contains($old)) {
        $content = $content.Replace($old, $new)
        [System.IO.File]::WriteAllText($f.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host ('PATCHED: ' + $f.Name)
    } else {
        Write-Host ('SKIP: ' + $f.Name)
    }
}
