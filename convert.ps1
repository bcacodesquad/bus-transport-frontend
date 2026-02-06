# PowerShell script to convert PPTX to PDF

$pptPath = Get-Item "Bus_Management_System_Project.pptx" | Select-Object -ExpandProperty FullName
$pdfPath = Join-Path (Split-Path $pptPath) "Bus_Management_System_Project.pdf"

Write-Host "Converting PowerPoint to PDF..."
Write-Host "Input: $pptPath"
Write-Host "Output: $pdfPath"

try {
    $PowerPoint = New-Object -ComObject PowerPoint.Application
    
    # Open presentation
    $presentation = $PowerPoint.Presentations.Open($pptPath, -1, -1, 1)
    
    # Save as PDF (32 = ppSaveAsPDF)
    $presentation.SaveAs($pdfPath, 32)
    
    Write-Host "Successfully converted to PDF: $pdfPath" -ForegroundColor Green
    
    $fileSize = (Get-Item $pdfPath).Length / 1KB
    Write-Host ("File size: " + [math]::Round($fileSize, 2) + " KB")
    
    $presentation.Close()
    $PowerPoint.Quit()
}
catch {
    Write-Host ("Error: " + $_.Exception.Message) -ForegroundColor Red
    exit 1
}
