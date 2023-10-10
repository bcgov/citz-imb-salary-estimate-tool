#!/bin/bash

# Use DeploymentConfigs to deploy the application to OpenShift.

oc process -f /home/runner/work/citz-imb-salary-estimate-tool/citz-imb-salary-estimate-tool/openshift/templates/$DEPLOYMENT_CONFIG --namespace="ec1236-tools" \
  -p OPENSHIFT_NAMESPACE="ec1236-dev" \
  -p APPLICATION_NAME=${APPLICATION_NAME} \
  -p IMAGE_REPOSITORY=${IMAGE_REPOSITORY} | \
  oc apply -f -
