FROM alpine:latest
RUN apk add --no-cache unzip ca-certificates
# Baixa a versão mais recente do PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v0.22.12/pocketbase_0.22.12_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/
EXPOSE 8080
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]