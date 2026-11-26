$urls = @('/', '/profil', '/anggota', '/program-kerja', '/kegiatan', '/artikel', '/galeri')
foreach ($u in $urls) {
  $uri = "http://localhost:3000" + $u
  $r = Invoke-WebRequest -Uri $uri -UseBasicParsing -TimeoutSec 60
  Write-Output ($uri + ": status=" + $r.StatusCode)
}