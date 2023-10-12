#!/bin/bash

# Use DeploymentConfigs to deploy the application to OpenShift.

oc process -f /home/runner/work/citz-imb-salary-estimate-tool/citz-imb-salary-estimate-tool/openshift/templates/$DEPLOYMENT_CONFIG --namespace="ec1236-dev" | \
  oc apply -f -
