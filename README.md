# node-config
This is a simple node.js application which makes use of external configuration. This sample is used as part of the OpenShift Architecture Workshop to demonstrate the concept of staging applications from Dev to Test etc. including a ConfigMap 


# Installation
Create a new project
create a new app based on node-js, pointing to this GIT Repo
create a new ConfigMap:

$ oc create -f https://raw.githubusercontent.com/wpernath/node-config/master/node-config.yml

Edit the deployment Configuration to add the ConfigMap and mount it to /etc/node-app. Add an ENVIRONMENT Variable to the deployment based on the configMap.

