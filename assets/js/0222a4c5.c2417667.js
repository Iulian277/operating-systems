"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[80901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(r,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={},l=void 0,s={unversionedId:"Lab/Application-Interaction/Time Server/content/so-cloud",id:"Lab/Application-Interaction/Time Server/content/so-cloud",title:"so-cloud",description:"SO Cloud",source:"@site/docs/Lab/Application-Interaction/Time Server/content/so-cloud.md",sourceDirName:"Lab/Application-Interaction/Time Server/content",slug:"/Lab/Application-Interaction/Time Server/content/so-cloud",permalink:"/operating-systems/Lab/Application-Interaction/Time Server/content/so-cloud",draft:!1,tags:[],version:"current",frontMatter:{}},r={},p=[{value:"SO Cloud",id:"so-cloud",level:2},{value:"Containers",id:"containers",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Initial Liftoff",id:"initial-liftoff",level:3},{value:"More Implementation Details",id:"more-implementation-details",level:3},{value:"(Even) More Implementation Details",id:"even-more-implementation-details",level:3},{value:"Virtual Machine Creation",id:"virtual-machine-creation",level:3},{value:"Disk Creation",id:"disk-creation",level:3},{value:"Practice: Create a New Disk by Hand",id:"practice-create-a-new-disk-by-hand",level:3},{value:"Practice: Implement <code>vm_stop</code>",id:"practice-implement-vm_stop",level:3}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"so-cloud"},"SO Cloud"),(0,o.kt)("p",null,'In this section we are going to build a "toy cloud" called ',(0,o.kt)("inlineCode",{parentName:"p"},"SO Cloud"),".\nSimilar to a real cloud (like ",(0,o.kt)("inlineCode",{parentName:"p"},"aws"),"), ",(0,o.kt)("inlineCode",{parentName:"p"},"SO Cloud")," will allow us to create and manage virtual machines, through an ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," API."),(0,o.kt)("h3",{id:"containers"},"Containers"),(0,o.kt)("p",null,"Our app will make use of ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," containers.\nA container is an OS-level virtualization method in which a group of userspace processes are isolated from the rest of the system."),(0,o.kt)("p",null,"Take for example a database server.\nInstead of running it directly on the host system, we'll run it in its own container.\nThis way the server process will be isolated from other processes on the system.\nIt will also have its own filesystem."),(0,o.kt)("p",null,"Besides isolation, containers are also useful for portability.\nSince a container comes with its own filesystem image, we can pack it together will all the dependencies, so that the app will run correctly no matter what packages are installed on the host system."),(0,o.kt)("p",null,"Finally, since our application will consist of more than 1 container, we'll also use ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),", which is a tool that helps us with running multi-container applications"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Make sure the following packages are installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt-get -y update; sudo apt-get -y install docker-compose jq\n")),(0,o.kt)("p",null,"Also, make sure your user can run docker commands.\nIf not, maybe you need to add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," group:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo usermod -aG docker student\n")),(0,o.kt)("p",null,"Then, after relogin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~$ docker ps\nCONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\n")),(0,o.kt)("p",null,"If you are running inside a virtual machine, you need to enable nested virtualization.\nExample for vmware:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"nested-virt-vmware",src:n(31070).Z,width:"845",height:"699"})),(0,o.kt)("p",null,"For virtualbox:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"nested-virt-vbox",src:n(53725).Z,width:"819",height:"590"})),(0,o.kt)("p",null,"If the button is greyed out, try from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~$ VBoxManage  list vms\n"USO 2022-2023" {042a5725-bfb7-4a46-9743-1164d3acac23}\n\nstudent@os:~$ VBoxManage modifyvm {042a5725-bfb7-4a46-9743-1164d3acac23} --nested-hw-virt on\n')),(0,o.kt)("h3",{id:"initial-liftoff"},"Initial Liftoff"),(0,o.kt)("p",null,"First, we need to do some initial setup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/so-cloud$ ./initial_setup.sh\n")),(0,o.kt)("p",null,"Then go to ",(0,o.kt)("inlineCode",{parentName:"p"},"support/so-cloud")," and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/so-cloud$ ./setup_db.sh\nSetting up db\nStarting db server\nWaiting for db server to start\n...\nStopping db server\nRestarting db server\nWaiting for db server to start\nCreating tables\nStopping db server\n\nstudent@os:~/.../support/so-cloud$ docker-compose up --build\n")),(0,o.kt)("p",null,"Now the http API will listen on port ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:5000"),". Let's try:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/so-cloud$ curl localhost:5000\nWelcome to SO Cloud!\n")),(0,o.kt)("p",null,"Let's check the running virtual machines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/so-cloud$ curl localhost:5000/vm_list\n[]\n")),(0,o.kt)("p",null,"We got an empty list, since there are no virtual machines yet.\nLet's create one (the command will take about 1 minute to complete):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../support/so-cloud$ curl -H "Content-Type: application/json" \\\n    -d \'{ "name": "my_vm", "image": "ubuntu_22.04", "network": "default", "mem_size": "2G", "disk_size": "10G"}\' \\\n    localhost:5000/vm_create\n{"id":1,"status":"ok"}\n')),(0,o.kt)("p",null,"Check the virtual machine list again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../support/so-cloud$ curl localhost:5000/vm_list\n[{"id":1,"name":"my_vm"}]\n')),(0,o.kt)("p",null,"We can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," tool to pretty print the ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," outputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../support/so-cloud$ curl -s localhost:5000/vm_list | jq .\n[\n  {\n    "id": 1,\n    "name": "my_vm"\n  }\n]\n')),(0,o.kt)("p",null,"We see our newly created virtual machine.\nLet's get some information about it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../support/so-cloud$ curl -s -H "Content-Type: application/json" -d \'{ "id": 1 }\' localhost:5000/vm_info | jq .\n{\n  "disk_size": 10737418240,\n  "id": 1,\n  "ip": "192.168.0.2",\n  "mem_size": 2147483648,\n  "name": "my_vm",\n  "network": "default",\n  "os": "ubuntu_22.04",\n  "state": "RUNNING"\n}\n')),(0,o.kt)("p",null,"We recognize some parameters that we specified at creation time, like ",(0,o.kt)("inlineCode",{parentName:"p"},"mem_size")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"disk_size"),".\nAlso, the IP address ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.0.2")," has been allocated for our machine."),(0,o.kt)("h3",{id:"more-implementation-details"},"More Implementation Details"),(0,o.kt)("p",null,"The application consists of 2 containers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"db"),", which runs a ",(0,o.kt)("inlineCode",{parentName:"p"},"MySQL")," database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"so-cloud"),", which runs the web application and the virtual machines"))),(0,o.kt)("p",null,"Let's check them.\nAfter running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up"),", in another terminal run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose ps"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/so-cloud$ docker-compose ps\n       Name                      Command              State                    Ports\n------------------------------------------------------------------------------------------------------\nso-cloud_db_1         docker-entrypoint.sh mariadbd   Up      3306/tcp\nso-cloud_so-cloud_1   python3 -u app.py               Up      0.0.0.0:5000->5000/tcp,:::5000->5000/tcp\n\n")),(0,o.kt)("p",null,"Now let's move inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"so-cloud")," container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/so-cloud$ docker-compose exec so-cloud bash\nroot@89a986d2526e:/app# \n")),(0,o.kt)("p",null,"Since the virtual machines run inside this container, we should expect to see the one that we created in the previous step."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"root@89a986d2526e:/app# ps -ef | cat\nUID          PID    PPID  C STIME TTY          TIME CMD\nroot           1       0  0 09:02 ?        00:00:00 /sbin/docker-init -- python3 -u app.py\nroot           7       1  0 09:02 ?        00:00:00 python3 -u app.py\nroot          12       7  6 09:02 ?        00:00:41 qemu-system-x86_64 -enable-kvm -m 2048 -hda /vm-disks/1/disk.qcow2 -net nic,macaddr=52:54:00:12:34:00 -net tap,ifname=tap0,script=no -monitor telnet::10001,server,nowait -serial telnet::10002,server,nowait -nographic\nroot          27       0  0 09:11 pts/3    00:00:00 bash\nroot          35      27  0 09:13 pts/3    00:00:00 ps -ef\n")),(0,o.kt)("p",null,"Indeed, a ",(0,o.kt)("inlineCode",{parentName:"p"},"qemu-system-x86_64")," process is there.\nThe vm should be accessible via ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," on the IP ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.0.2")," with password ",(0,o.kt)("inlineCode",{parentName:"p"},"123456")," (if you get ",(0,o.kt)("inlineCode",{parentName:"p"},"connection refused")," here you need to wait a bit more for the machine to boot):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"root@adf6e0bf4e6e:/app# ssh root@192.168.0.2\nThe authenticity of host '192.168.0.2 (192.168.0.2)' can't be established.\nED25519 key fingerprint is SHA256:3Mfa1fB9y4knUDJWEmEOTz9dWOE7SVhnH/kCBJ15Y0E.\nThis key is not known by any other names\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '192.168.0.2' (ED25519) to the list of known hosts.\nroot@192.168.0.2's password: \nWelcome to Ubuntu 22.04 LTS (GNU/Linux 5.15.0-40-generic x86_64)\n\n...\n\nLast login: Thu Nov 17 07:49:55 2022\nroot@ubuntu:~# \n")),(0,o.kt)("p",null,"The vm is also accessible on the serial console (notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"-serial telnet::10002,server,nowait")," argument to qemu).\nIf we start a telnet connection on port ",(0,o.kt)("inlineCode",{parentName:"p"},"10002"),", qemu will show us the virtual machine's serial console (basically the output that we normally see when running a virtual machine in text mode)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"root@adf6e0bf4e6e:/app# telnet localhost 10002\nTrying 127.0.0.1...\nConnected to localhost.\nEscape character is '^]'.\n\nubuntu login: root\nPassword: \nWelcome to Ubuntu 22.04 LTS (GNU/Linux 5.15.0-40-generic x86_64)\n\n...\n\nLast login: Thu Nov 17 07:50:11 UTC 2022 from 192.168.0.1 on pts/0\nroot@ubuntu:~# \n")),(0,o.kt)("p",null,"To exit the serial console press ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL+]"),", then type ",(0,o.kt)("inlineCode",{parentName:"p"},"quit"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"root@ubuntu:~# \ntelnet> quit\nConnection closed.\nroot@adf6e0bf4e6e:/app# \n")),(0,o.kt)("h3",{id:"even-more-implementation-details"},"(Even) More Implementation Details"),(0,o.kt)("p",null,"The architecture of the system can be summarized in the following diagram:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"so-cloud",src:n(69981).Z,width:"571",height:"251"})),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"so-cloud")," container is the core of the entire system.\nIt consists of a web application written in python using ",(0,o.kt)("inlineCode",{parentName:"p"},"flask"),".\nThis web application exposes a virtual machine ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," that the user can interact with (like ",(0,o.kt)("inlineCode",{parentName:"p"},"vm_create"),")."),(0,o.kt)("p",null,"So, when we're calling ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," like in the example above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'curl -H "Content-Type: application/json" \\\n    -d \'{ "name": "my_vm", "image": "ubuntu_22.04", "network": "default", "mem_size": "2G", "disk_size": "10G"}\' \\\n    localhost:5000/vm_create\n')),(0,o.kt)("p",null,"it will do an ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP POST")," request (because of the ",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," parameter) to ",(0,o.kt)("inlineCode",{parentName:"p"},"/vm_create"),".\nThe request will be handled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"api_vm_create")," function in ",(0,o.kt)("inlineCode",{parentName:"p"},"app.py")," (because of the ",(0,o.kt)("inlineCode",{parentName:"p"},'@app.route("/vm_create", methods=["POST"])')," line)."),(0,o.kt)("p",null,"Inside this function, we also have access to the request payload (the string that comes after ",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," in our ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," call).\nMore specifically, ",(0,o.kt)("inlineCode",{parentName:"p"},"request.json")," will parse this payload as a ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," object and hand it back to us as a python dictionary.\nIn this dictionary we'll find the parameters for our request, like ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"network"),", and so on."),(0,o.kt)("p",null,"The function will then take the actions required to create the virtual machine: create the disk, start qemu, interact with the database, etc.\nFinally, whatever is returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"api_vm_create")," function will be received by the ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," request as the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP")," response.\nHere we also return ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," objects, like ",(0,o.kt)("inlineCode",{parentName:"p"},'{"id":1,"status":"ok"}'),"."),(0,o.kt)("p",null,"There are 3 objects used by the system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"vm")," - the actual virtual machine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"disk")," - holds information about virtual machine disks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"network")," - holds information about a network"))),(0,o.kt)("p",null,"Each of these objects are stored in a table in the database."),(0,o.kt)("p",null,"Let's check the database contents (take the password from the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup_db.sh")," file):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/so-cloud$ docker-compose exec db mysql -u so-cloud -p so-cloud\nEnter password: \n...\nMariaDB [so-cloud]> select * from vm;\n+----+-------+---------+------------+------------+-------------------+------------+----------+-------------------+------------------+-------+\n| id | name  | disk_id | mem_size   | network_id | tap_interface_idx | ip         | qemu_pid | qemu_monitor_port | qemu_serial_port | state |\n+----+-------+---------+------------+------------+-------------------+------------+----------+-------------------+------------------+-------+\n|  1 | my_vm |       1 | 2147483648 |          1 |                 0 | 3232235522 |       18 |             10001 |            10002 |     0 |\n+----+-------+---------+------------+------------+-------------------+------------+----------+-------------------+------------------+-------+\n1 row in set (0.001 sec)\n\nMariaDB [so-cloud]> select * from disk;\n+----+-------------+---------------+\n| id | size        | template_name |\n+----+-------------+---------------+\n|  1 | 10737418240 | ubuntu_22.04  |\n+----+-------------+---------------+\n1 row in set (0.000 sec)\n\nMariaDB [so-cloud]> select * from network;\n+----+---------+----------------------+------------+------------+\n| id | name    | bridge_interface_idx | ip         | mask       |\n+----+---------+----------------------+------------+------------+\n|  1 | default |                    0 | 3232235520 | 4294901760 |\n+----+---------+----------------------+------------+------------+\n1 row in set (0.000 sec)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Note: in real life DON'T store passwords in text files inside a repository"),"."),(0,o.kt)("p",null,"Some observations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There is a ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," network already created.\nThat is why we specified ",(0,o.kt)("inlineCode",{parentName:"p"},'"network": "default"')," in the vm creation parameters, and we see that the vm is assigned to this network (",(0,o.kt)("inlineCode",{parentName:"p"},"network_id")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This network's ip address is ",(0,o.kt)("inlineCode",{parentName:"p"},"3232235520"),", which in hex is ",(0,o.kt)("inlineCode",{parentName:"p"},"0xC0A80000"),", that is, ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.0.0"),".\nThe netmask is ",(0,o.kt)("inlineCode",{parentName:"p"},"0xFFFF0000"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"/16"),".\nThis explains why our vm received the ip address ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.0.2"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There is a disk with the size of ",(0,o.kt)("inlineCode",{parentName:"p"},"10GB"),", based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu_22.04")," template, exactly like we requested.\nThis disk is assigned to our vm (",(0,o.kt)("inlineCode",{parentName:"p"},"disk_id")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),").\nThe disk file will reside in ",(0,o.kt)("inlineCode",{parentName:"p"},"support/so-cloud/vm-disks/1/disk.qcow2"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"/vm-disks/1/disk.qcow2")," inside the container."))),(0,o.kt)("h3",{id:"virtual-machine-creation"},"Virtual Machine Creation"),(0,o.kt)("p",null,"Take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"vm_create")," function in ",(0,o.kt)("inlineCode",{parentName:"p"},"support/so-cloud/so-cloud/vm.py"),".\nThe steps undertaken are roughly:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"some initial allocations: the virtual machine IP address, network interface, qemu ports, etc")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"the virtual machine disk is created, based on the template specified by the user (like ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu_22.04"),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"the virtual machine is started with this new disk, in order to do some more customizations (the ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu_22_04_vm_prepare")," function)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"the virtual machine is restarted again with the final disk in place"))),(0,o.kt)("h3",{id:"disk-creation"},"Disk Creation"),(0,o.kt)("p",null,"All the disk templates are in ",(0,o.kt)("inlineCode",{parentName:"p"},"support/so-cloud/disk-templates"),".\nThis directory will be mounted in ",(0,o.kt)("inlineCode",{parentName:"p"},"/disk-templates")," inside the container."),(0,o.kt)("p",null,"The first step of disk creation is to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"qcow2")," disk file based on the template specified by the user (step 2 from the explanation above)."),(0,o.kt)("p",null,"This is done in the ",(0,o.kt)("inlineCode",{parentName:"p"},"create_disk_from_template")," function in ",(0,o.kt)("inlineCode",{parentName:"p"},"support/so-cloud/so-cloud/disk.py"),".\nThe function will first create a disk object in the database, then it will call 2 shell scripts: ",(0,o.kt)("inlineCode",{parentName:"p"},"create_disk_from_template.sh")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setup_root_password.sh"),"."),(0,o.kt)("p",null,"The second step is to start the virtual machine with this disk and do some customizations (step 3 from above)."),(0,o.kt)("p",null,"This is done in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu_22_04_vm_prepare")," function in ",(0,o.kt)("inlineCode",{parentName:"p"},"support/so-cloud/so-cloud/vm.py"),".\nThe code will connect to the vm's qemu serial console using ",(0,o.kt)("inlineCode",{parentName:"p"},"pexpect"),".\nThen it will use a series of ",(0,o.kt)("inlineCode",{parentName:"p"},"expect_exact")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"sendline")," pairs to interact with the virtual machine, as if those commands were typed in the command-line."),(0,o.kt)("h3",{id:"practice-create-a-new-disk-by-hand"},"Practice: Create a New Disk by Hand"),(0,o.kt)("p",null,"Let's replicate the above mentioned steps and create a new disk ourselves."),(0,o.kt)("p",null,"First, we have to call the 2 scripts from the ",(0,o.kt)("inlineCode",{parentName:"p"},"create_disk_from_template")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/so-cloud$ ./disk-templates/ubuntu_22.04/create_disk_from_template.sh ./disk-templates/ubuntu_22.04/ubuntu_22.04.qcow2 my-disk.qcow2 10737418240\nImage resized.\n\nstudent@os:~/.../support/so-cloud$ ls -lh my-disk.qcow2\n-rw-r--r-- 1 student student 619M Nov 20 15:41 my-disk.qcow2\n\nstudent@os:~/.../support/so-cloud$ sudo ./disk-templates/ubuntu_22.04/setup_root_password.sh my-disk.qcow2 123456\n")),(0,o.kt)("p",null,"Now we can start a qemu instance using this disk:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/so-cloud$ qemu-system-x86_64 -enable-kvm -m 2G -hda my-disk.qcow2 -nographic\n...\nUbuntu 22.04 LTS ubuntu ttyS0\n\nubuntu login: root\nPassword: \n...\nroot@ubuntu:~# \n")),(0,o.kt)("p",null,"Here we can further run customization commands, like the ones in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu_22_04_vm_prepare")," function, or any other things that we want."),(0,o.kt)("p",null,"When we're done, we run the ",(0,o.kt)("inlineCode",{parentName:"p"},"halt")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"root@ubuntu:~# halt\nroot@ubuntu:~#          Stopping Session 1 of User root...\n[  OK  ] Removed slice Slice /system/modprobe.\n[  OK  ] Stopped target Graphical Interface.\n...\n         Starting System Halt...\n[   86.431398] reboot: System halted\n")),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"System halted")," message is printed, press ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL+A X")," to exit qemu (that is, press ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL+A"),", release ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", press ",(0,o.kt)("inlineCode",{parentName:"p"},"X"),")."),(0,o.kt)("h3",{id:"practice-implement-vm_stop"},"Practice: Implement ",(0,o.kt)("inlineCode",{parentName:"h3"},"vm_stop")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"vm_stop")," command will stop a particular virtual machine, meaning it will stop the qemu process for that vm.\nThe implementation starts in ",(0,o.kt)("inlineCode",{parentName:"p"},"api_vm_stop")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"app.py"),", which is the function that handles the ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," request for the stop operation.\nHere you need to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"extract the virtual machine ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," from the request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"use the ",(0,o.kt)("inlineCode",{parentName:"p"},"vm.vm_get")," function to convert this ID into a ",(0,o.kt)("inlineCode",{parentName:"p"},"VM")," structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"call ",(0,o.kt)("inlineCode",{parentName:"p"},"vm.vm_stop")," and pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"VM")," object to it"))),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"vm.vm_stop"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"call ",(0,o.kt)("inlineCode",{parentName:"p"},"stop_qemu_for_vm"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"change the vm pid in the database to ",(0,o.kt)("inlineCode",{parentName:"p"},"-1"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"change the vm state in the database to ",(0,o.kt)("inlineCode",{parentName:"p"},"VM_STATE_STOPPED")))),(0,o.kt)("p",null,"After modifying the code you should run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up --build")," again.\nAlso, if your database became inconsistent, you can clean it up by re-running the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup_db.sh")," script.\nThen delete all vm disks with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo rm -rf vm-disks/*"),"."),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"vm_stop")," implemented, the system should work like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../support/so-cloud$ curl -s localhost:5000/vm_list | jq .\n[\n  {\n    "id": 1,\n    "name": "my_vm"\n  }\n]\nstudent@os:~/.../support/so-cloud$ curl -H "Content-Type: application/json" -d \'{ "id": 1}\' localhost:5000/vm_scurl -s -H "Content-Type: application/json" -d \'{ "id": 1 }\' localhost:5000/vm_info | jq .\n{\n  "disk_size": 10737418240,\n  "id": 1,\n  "ip": "192.168.0.2",\n  "mem_size": 2147483648,\n  "name": "my_vm",\n  "network": "default",\n  "os": "ubuntu_22.04",\n  "state": "RUNNING"\n}\n')),(0,o.kt)("p",null,"The vm is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"RUNNING")," state.\nNow let's stop it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../support/so-cloud$ curl -H "Content-Type: application/json" -d \'{ "id": 1}\' localhost:5000/vm_stop\n{"status":"ok"}\nstudent@os:~/.../support/so-cloud$ curl -s -H "Content-Type: application/json" -d \'{ "id": 1 }\' localhost:5000/vm_info | jq .\n{\n  "disk_size": 10737418240,\n  "id": 1,\n  "ip": "192.168.0.2",\n  "mem_size": 2147483648,\n  "name": "my_vm",\n  "network": "default",\n  "os": "ubuntu_22.04",\n  "state": "STOPPED"\n}\n')),(0,o.kt)("p",null,"Now the state is ",(0,o.kt)("inlineCode",{parentName:"p"},"STOPPED"),".\nInside the container, the qemu process should be gone as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/so-cloud$ docker-compose exec so-cloud bash\nroot@b0600eff8903:/app# ps -ef\nUID          PID    PPID  C STIME TTY          TIME CMD\nroot           1       0  0 10:00 ?        00:00:00 /sbin/docker-init -- python3 -u app.py\nroot           7       1  0 10:00 ?        00:00:00 python3 -u app.py\nroot          33       0  0 10:00 pts/3    00:00:00 bash\nroot          41      33  0 10:00 pts/3    00:00:00 ps -ef\n")),(0,o.kt)("p",null,"Finally, the vm can be started again using ",(0,o.kt)("inlineCode",{parentName:"p"},"vm_start"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../support/so-cloud$ curl -H "Content-Type: application/json" -d \'{ "id": 1}\' localhost:5000/vm_start\n{"status":"ok"}\n')))}d.isMDXComponent=!0},53725:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nested_virt_vbox-4c9c494a233277658f851662ca2dc082.png"},31070:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nested_virt_vmware-1b3a6b314c74c626bc006936abb01bf7.png"},69981:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/so_cloud-fa8fda7e87e43f88deac32893375de76.svg"}}]);