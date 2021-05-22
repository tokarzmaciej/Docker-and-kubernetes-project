# maciej-tokarz-T-C-project

# Dev-0:
## * Dev-0-1
### - frontend :
docker build -t maciejtokarz/project:Dev-f-0-1 .  
docker run -p 8080:80 maciejtokarz/project:Dev-f-0-1  
docker push maciejtokarz/project:Dev-f-0-1  
kubectl create namespace development  
kubectl apply -f frontend-clusterip.yaml  
kubectl get services -n development  
kubectl apply -f frontend-deployment.yaml  
kubectl get deployment -n development  
kubectl apply -f ingress-service.yaml  
kubectl get ingress -n development  
### - backend :
docker build -t maciejtokarz/project:Dev-b-0-1 .  