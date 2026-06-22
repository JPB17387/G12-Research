# update-paths.ps1 — Update all HTML files with new relative paths after reorganization

$htmlDir = "c:\Users\HF\Desktop\G12 Research\html"

Get-ChildItem "$htmlDir\*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw

    # Update CSS paths (from same-level to ../css/)
    $content = $content -replace 'href="global\.css"', 'href="../css/global.css"'
    $content = $content -replace 'href="homepage\.css"', 'href="../css/homepage.css"'
    $content = $content -replace 'href="chapter 1\.css"', 'href="../css/chapter 1.css"'
    $content = $content -replace 'href="Chapter 2\.css"', 'href="../css/Chapter 2.css"'
    $content = $content -replace 'href="Chapter 3\.css"', 'href="../css/Chapter 3.css"'
    $content = $content -replace 'href="Chapter 4\.css"', 'href="../css/Chapter 4.css"'
    $content = $content -replace 'href="Chapter 5\.css"', 'href="../css/Chapter 5.css"'
    $content = $content -replace 'href="About authors\.css"', 'href="../css/About authors.css"'
    $content = $content -replace 'href="Contact us\.css"', 'href="../css/Contact us.css"'
    $content = $content -replace 'href="References\.css"', 'href="../css/References.css"'
    $content = $content -replace 'href="Apendices\.css"', 'href="../css/Apendices.css"'
    $content = $content -replace 'href="Curriculum Vitae\.css"', 'href="../css/Curriculum Vitae.css"'

    # Update JS paths
    $content = $content -replace 'src="global\.js"', 'src="../js/global.js"'

    # Update navigation links (HTML pages are now siblings in html/)
    # Since all HTML files are in the same html/ folder, inter-page links stay the same (e.g., href="Chapter 1.html")
    # But the navbar-brand/homepage link stays the same too since it's a sibling

    # Update image paths (images are at ../Images/)
    $content = $content -replace 'src="Images/', 'src="../Images/'
    $content = $content -replace "src='Images/", "src='../Images/"

    Set-Content -Path $_.FullName -Value $content -NoNewline
    Write-Host ("Updated paths in: " + $_.Name)
}

Write-Host "`nAll HTML files updated successfully!"
