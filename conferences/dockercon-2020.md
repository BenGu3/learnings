# DockerCon Live 2020

[DockerCon Agenda](https://docker.events.cube365.net/docker/dockercon)

## [How to Get Started with Docker](https://docker.events.cube365.net/docker/dockercon/content/Videos/hgMFTyX5kYKmTPWZo)

- DockerHub is the image repo (has auto build, CI/CD, team organization, etc.)

## [Build & Deploy Multi-Container Applications to AWS](https://docker.events.cube365.net/docker/dockercon/content/Videos/NNkrWWqJSgBBy3nf3)

- Images are pulled down from DockerHub. You can pull down an image from DockerHub to have a local cache that will be used by Docker/Compose to save time.
- Use multi-stage builds to break up a Dockerfile into each stage of deployments (creating deployable image)

## [How To Build and Run Node Apps with Docker and Compose](https://docker.events.cube365.net/docker/dockercon/content/Videos/eQogQXrN4xCbSuzCt)

- `node-alpine` image is a slimmed down node image (though does have some downsides)
- Don't run applications as root user?
- [12FA](https://12factor.net/)
- [From Containers To Kubernetes With Node Js](https://www.digitalocean.com/community/tutorial_series/from-containers-to-kubernetes-with-node-js)

## [Become a Docker Power User With Microsoft Visual Studio Code](https://docker.events.cube365.net/docker/dockercon/content/Videos/4YkHYPnoQshkmnc26)

- Bootstrap setup for new/existing projects
- Container/image/registry/network management
- Command completion in Dockerfiles and Compose files
- Docker container debugging tools 😳

## [Building a Docker Image Packaging Pipeline Using GitHub Actions](https://docker.events.cube365.net/docker/dockercon/content/Videos/SPWM3BdnCZWPN4fN9)

- Github Actions uses Docker under the hood, so docker commands are native
- [build-push-action](https://github.com/docker/build-push-action)  is a powerful interface for building Docker images

## [Hands-on Helm](https://docker.events.cube365.net/docker/dockercon/content/Videos/ZbxZrH75SKqf78x2S)

- [https://helm.sh/](https://helm.sh/)

## [Monitoring in a Microservices World](https://docker.events.cube365.net/docker/dockercon/content/Videos/ynr2xuTtb9wMhAGEh)

- You need to define what it means for your service to be healthy
- Distributed tracing can be used to trace the calls and call times across multiple micro services

## [Simplify All the Things with Docker Compose](https://docker.events.cube365.net/docker/dockercon/content/Videos/AG9iBqW3BdXTR9Zfh)

- Multi-stage builds are used to split up compile and run time

## [Blimp – Docker Compose in the Cloud](https://docker.events.cube365.net/docker/dockercon/content/Videos/icm6kmb3P3ZT8vwt5)

- [Blimp](https://kelda.io/)
- As your number of containers increase, the resources required to run that environment becomes eventually unsustainable

## [How to Build and Test Your Docker Images in the Cloud](https://docker.events.cube365.net/docker/dockercon/content/Videos/NjnEcHsq29HMDbMRn)

- DockerHub has some CI/CD (auto build/test)

## [You Want To Kubernetes? You MUST Know Docker](https://docker.events.cube365.net/docker/dockercon/content/Videos/kmhESLz8DvkkpgEqs)

- K8s = K-(8 letters in `ubernetes`)-s 🙃
- Kubernetes is an open source container-orchestration system
- A pod is a group of instances running the same application

## [Your Container has Vulnerabilities. Now What?](https://docker.events.cube365.net/docker/dockercon/content/Videos/GZpzJAapdrSXohzNz)

- Use Snyk to find vulnerabilities in your Docker images
