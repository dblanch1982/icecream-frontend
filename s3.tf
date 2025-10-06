# 1️⃣ S3 Bucket für statische Website
resource "aws_s3_bucket" "frontend_bucket" {
  bucket = "mein-frontend-${var.env}"

  tags = {
    Name = "Frontend-${var.env}"
  }
}
