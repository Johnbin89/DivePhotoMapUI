terraform {
  cloud {
    organization = "johnbin89"
    workspaces {
      name = "divephotomapui-migrate"
    }
  }

  required_providers {
    docker = {
      source  = "bierwirth-it/docker"
      version = "3.0.5"
    }
  }
}

provider "docker" {
  host = var.docker_remote_host
}
