# PowerShell script to convert PPTX to PDF using PowerPoint COM object

$pptPath = Get-Item "Bus_Management_System_Project.pptx" | Select-Object -ExpandProperty FullName
$pdfPath = [System.IO.Path]::Combine([System.IO.Path]::GetDirectoryName($pptPath), "Bus_Management_System_Project.pdf")

Write-Host "Converting PowerPoint to PDF..."
Write-Host "Input: $pptPath"
Write-Host "Output: $pdfPath"

try {
    # Create PowerPoint COM object
    $PowerPoint = New-Object -ComObject PowerPoint.Application
    $PowerPoint.Visible = $true
    
    # Open the presentation
    $presentation = $PowerPoint.Presentations.Open($pptPath, [Microsoft.Office.Interop.PowerPoint.MsoTriState]::msoTrue)
    
    # Save as PDF
    $presentation.SaveAs($pdfPath, [Microsoft.Office.Interop.PowerPoint.PpSaveAsFileType]::ppSaveAsPDF)
    
    Write-Host "✓ Successfully converted to PDF: $pdfPath"
    
    # Get file size
    $fileSize = (Get-Item $pdfPath).Length / 1KB
    Write-Host "File size: $([math]::Round($fileSize, 2)) KB"
    
    # Close presentation
    $presentation.Close()
    $PowerPoint.Quit()
}
catch {
    Write-Host ("Error during conversion: " + $_) -ForegroundColor Red
    exit 1
}
