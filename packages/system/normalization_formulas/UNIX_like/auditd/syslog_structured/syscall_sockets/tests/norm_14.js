{
  "subject": "process",
  "action": "create",
  "object": "socket",
  "status": "success",
  "category.generic": "Socket",
  "category.high": "Network Management",
  "category.low": "Manipulation",
  "chain_id": "51606254",
  "datafield1": "dns_client.py",
  "event_src.category": "Operating system",
  "event_src.ip": "10.10.52.179",
  "event_src.rule": "pt_siem_api_socket",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_sockets",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "msgid": "socket",
  "object.account.group": "root",
  "object.account.id": "0",
  "object.account.name": "root",
  "object.domain": "AF_PACKET",
  "object.type": "SOCK_RAW",
  "protocol": "768",
  "subject.account.id": "0",
  "subject.account.name": "root",
  "subject.account.privileges": "0",
  "subject.account.session_id": "4294967295",
  "subject.process.fullpath": "/usr/bin/python3.7",
  "subject.process.id": "21646",
  "subject.process.meta": "/usr/bin/python3 /etc/zabbix/scripts/dns_client.py int",
  "subject.process.name": "python3.7",
  "subject.process.parent.id": "21645",
  "subject.process.path": "/usr/bin/",
  "time": "2022-05-21T11:59:44.000Z"
}