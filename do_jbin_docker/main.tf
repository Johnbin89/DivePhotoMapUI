resource "docker_image" "divephotomapui" {
  name = "johnbin89/divephotomapui:latest"
  keep_locally = false
}

resource "docker_container" "divephotomapui" {
  name  = "divephotomapui"
  image = docker_image.divephotomapui.name
  labels {
    label = "traefik.enable"
    value = true
  }
  labels {
    label = "traefik.backend"
    value = "divephotomapui"
  }  
  labels {
    label = "traefik.frontend.rule"
    value = "Host:divemap.jbin.me"
  }  
  labels {
    label = "traefik.port"
    value = 3000
  }
  env = ["NEXT_PUBLIC_DJ_URL=${var.NEXT_PUBLIC_DJ_URL}"]  
}