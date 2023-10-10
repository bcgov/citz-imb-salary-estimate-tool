#!/bin/bash

# Use DeploymentConfigs to deploy the application to OpenShift.

oc process -f /home/runner/work/citz-imb-salary-estimate-tool/citz-imb-salary-estimate-tool/openshift/templates/$DEPLOYMENT_CONFIG --namespace="ec1236-tools" \
  -p OPENSHIFT_NAMESPACE="ec1236-dev" \
  -p APPLICATION_NAME="set-api" \
  -p IMAGE_REPOSITORY="image-registry.apps.silver.devops.gov.bc.ca" | \
  oc apply -f -
