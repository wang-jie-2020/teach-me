# 部署网络处理手段 Resources

## Knowledge

- [NGINX: Reverse Proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)
  官方反向代理说明：请求转发、上游服务器、响应返回、请求头修改、缓冲和负载均衡入口。Use for: Nginx 反向代理、应用网关、上游转发。
- [Caddy: Reverse proxy quick-start](https://caddyserver.com/docs/quick-starts/reverse-proxy)
  官方快速上手，展示 `caddy reverse-proxy --from example.com --to :9000`、自动 HTTPS、代理到 HTTPS 后端时的 Host/SNI 注意点。Use for: 快速搭建 HTTPS 反代。
- [Caddy: Automatic HTTPS](https://caddyserver.com/docs/automatic-https)
  官方说明 Caddy 如何自动签发和续期证书、HTTP→HTTPS 重定向、本地 HTTPS。Use for: TLS 终止和证书自动化。
- [HAProxy: Configuration basics](https://www.haproxy.com/documentation/haproxy-configuration-tutorials/proxying-essentials/configuration-basics/)
  官方配置结构说明：global/defaults/frontend/backend/listen。Use for: 理解负载均衡器的入口和后端池模型。
- [MDN: Proxy servers and tunneling](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)
  清晰区分 forward proxy 与 reverse proxy，并说明反代常用于负载均衡、认证、解密和缓存。Use for: 代理术语基线。
- [RFC 9110: HTTP Semantics — CONNECT](https://www.rfc-editor.org/rfc/rfc9110#name-connect)
  HTTP CONNECT 的标准定义：代理建立到目标服务器的双向隧道，常用于通过代理承载 TLS；也说明开放任意 CONNECT 的风险。Use for: HTTP 代理与隧道边界。
- [OpenBSD ssh(1) manual](https://man.openbsd.org/ssh.1)
  OpenSSH 权威手册：`-L` 本地转发、`-R` 远程转发、`-D` 动态转发/SOCKS4/SOCKS5。Use for: SSH Tunnel 和 SOCKS5。
- [SSH Academy: SSH tunneling examples](https://www.ssh.com/academy/ssh/tunneling-example)
  有实际命令示例，并提醒 SSH 端口转发可能被滥用，需要通过 `AllowTcpForwarding` 等配置限制。Use for: SSH 隧道实战和安全边界。
- [RFC 1928: SOCKS Protocol Version 5](https://www.rfc-editor.org/rfc/rfc1928)
  SOCKS5 标准。Use for: 需要精确定义 SOCKS5 的时候。
- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)
  官方说明：`cloudflared` 从源站向 Cloudflare 建立 outbound-only 隧道，使没有公网 IP 的资源可被访问。Use for: 内网穿透与“源站不开放入站端口”。
- [Cloudflare Access: Add web applications](https://developers.cloudflare.com/cloudflare-one/applications/)
  官方说明 Access 作为 identity-aware proxy，在请求到达应用前按身份、设备姿态等策略放行。Use for: 零信任访问控制。
- [Tailscale: Subnet routers](https://tailscale.com/kb/1019/subnets)
  官方说明 subnet router 作为网关把传统子网接入 tailnet，并涉及 SNAT/保留源 IP。Use for: Overlay 网络访问内网网段。
- [WireGuard Quick Start](https://www.wireguard.com/quickstart/)
  官方快速上手，展示 WireGuard 接口、密钥、peer、allowed-ips、endpoint。Use for: 理解轻量 VPN 的基础模型。
- [frp Documentation](https://gofrp.org/en/docs/)
  frp 官方文档入口，包含概念、安装、示例和功能。Use for: 自建内网穿透。
- [Docker: Networking overview](https://docs.docker.com/engine/network/)
  官方说明容器网络、bridge 网络、发布端口。Use for: 容器端口为何外部访问不到。
- [Docker: Publishing and exposing ports](https://docs.docker.com/get-started/docker-concepts/running-containers/publishing-ports/)
  官方强调 `-p HOST_PORT:CONTAINER_PORT` 会把容器端口发布到宿主机；默认发布到所有网卡，敏感服务要谨慎。Use for: Docker 暴露端口安全边界。
- [Kubernetes: Service](https://kubernetes.io/docs/concepts/services-networking/service/)
  官方说明 Service 如何暴露一组 Pods，以及 ClusterIP/NodePort/LoadBalancer/ExternalName。Use for: K8s 内外部服务发现。
- [Kubernetes: Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)
  官方说明 Ingress 如何把 HTTP 路由规则集中到集群入口。Use for: K8s HTTP 入口和路由。
- [RFC 1918: Address Allocation for Private Internets](https://www.rfc-editor.org/rfc/rfc1918)
  私有地址空间的基础标准。Use for: 判断“内网地址”和公网可达性。
- [RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)
  TLS 1.3 标准。Use for: 需要追溯 HTTPS/TLS 安全属性时。
- [everything curl: Verbose](https://everything.curl.dev/usingcurl/verbose)
  curl 官方书籍说明 `-v/--verbose` 会展示 DNS 解析后的 IP、连接端口、TLS 细节和收发头。Use for: HTTP/HTTPS 链路排障第一步。
- [everything curl: Proxies](https://everything.curl.dev/usingcurl/proxies)
  curl 官方书籍解释代理是代表客户端访问服务器的中间人，并覆盖不同代理类型。Use for: 验证正向代理、SOCKS5、HTTP CONNECT。
- [curl manpage](https://curl.se/docs/manpage.html)
  curl 官方手册，包含 `--resolve`、`--connect-to`、`--proxy`、`--proxytunnel`、错误码等。Use for: 绕过 DNS、指定连接目标、代理测试。
- [BIND 9 Manual: dig](https://bind9.readthedocs.io/en/latest/manpages.html#dig-dns-lookup-utility)
  BIND 官方手册说明 `dig` 是灵活的 DNS 查询与排障工具。Use for: DNS 解析、权威服务器、TTL、返回码排查。
- [tcpdump(1) man page](https://www.tcpdump.org/manpages/tcpdump.1.html)
  tcpdump 官方手册。Use for: 在服务器上确认 SYN、TLS、HTTP 包是否到达。
- [Wireshark User’s Guide](https://www.wireshark.org/docs/wsug_html_chunked/)
  Wireshark 官方用户指南。Use for: 图形化分析抓包、过滤、Follow Stream。
- [Wireshark Wiki: Capture Filters](https://wiki.wireshark.org/CaptureFilters)
  说明 capture filter 与 display filter 的区别：前者抓包前过滤，后者抓包后显示过滤。Use for: 避免抓包过滤误用。
- [Linux man-pages: ss(8)](https://man7.org/linux/man-pages/man8/ss.8.html)
  Linux socket statistics 手册。Use for: 确认服务监听地址、端口和连接状态。
- [Linux man-pages: ip(8)](https://man7.org/linux/man-pages/man8/ip.8.html)
  Linux `ip` 命令手册入口。Use for: 查看地址、路由、接口状态。

## Wisdom (Communities)

- [Server Fault](https://serverfault.com/)
  运维、部署、网络排障问答社区。Use for: 真实部署故障和配置边界，但要注意答案年代。
- [NGINX Community Forum](https://community.nginx.org/)
  NGINX 官方社区。Use for: Nginx 行为、配置和模块问题。
- [Caddy Community](https://caddy.community/)
  Caddy 官方社区。Use for: 自动 HTTPS、Caddyfile、反代和插件问题。
- [Tailscale Forum](https://forum.tailscale.com/)
  Tailscale 官方社区。Use for: tailnet、subnet router、ACL 和连接问题。

## Gaps

- 后续如果深入 Kubernetes Gateway API，需要补充 Gateway API 官方文档与具体 Ingress Controller 文档。
