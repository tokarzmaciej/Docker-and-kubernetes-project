# maciej-tokarz-T-C-project

# Dev-0:

## - Frontend
### * Dev-f-0-1:
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
### * Dev-f-0-2:
docker build -t maciejtokarz/project:Dev-f-0-2 .  
docker push maciejtokarz/project:Dev-f-0-2  
kubectl apply -f frontend-deployment.yaml  
### * Dev-f-0-3:
docker build -t maciejtokarz/project:Dev-f-0-3 .  
docker push maciejtokarz/project:Dev-f-0-3   
kubectl apply -f frontend-clusterip.yaml -n development  
kubectl apply -f frontend-deployment.yaml -n development  
kubectl rollout history deployment.apps/frontend-deployment -n development  
docker build -t maciejtokarz/project:Dev-f-0-3 .  
docker push maciejtokarz/project:Dev-f-0-3  
kubectl apply -f frontend-deployment.yaml -n development  
## - Backend
### * Dev-b-0-1:
docker build -t maciejtokarz/project:Dev-b-0-1 .  
docker push maciejtokarz/project:Dev-b-0-1  
kubectl apply -f backend-clusterip.yaml -n development  
kubectl apply -f backend-deployment.yaml -n development  
kubectl apply -f ingress-service.yaml -n development  
kubectl apply -f mongodb-clusterip.yaml -n development  
kubectl apply -f mongodb-configMap.yaml -n development  
kubectl apply -f mongodb-pv.yaml -n development  
kubectl apply -f mongodb-pvc.yaml -n development  
kubectl apply -f mongodb-deployment.yaml -n development  
### * Dev-b-0-2:
docker build -t maciejtokarz/project:Dev-b-0-2 .  
docker push maciejtokarz/project:Dev-b-0-2  
kubectl apply -f backend-deployment.yaml -n development  

# Prod-0:

kubectl create namespace production  
kubectl apply -f ./ -n production  
kubectl get all -n production  

# Dev-1:

## - Frontend
### * Dev-f-0-1:
## - Backend
### * Dev-b-0-3:
docker build -t maciejtokarz/project:Dev-b-0-3 .  
docker push maciejtokarz/project:Dev-b-0-3   
kubectl apply -f redis-clusterip.yaml -n development  
kubectl apply -f redis-deployment.yaml -n development  
kubectl apply -f backend-deployment.yaml -n development  
kubectl delete deployment.apps/mongodb-deployment -n development  
kubectl delete pvc mongodb-pvc -n development  
kubectl delete pv mongodb-pv -n development  
kubectl apply -f mongodb-pv.yaml -n development  
kubectl apply -f mongodb-pvc.yaml -n development  
kubectl apply -f mongodb-deployment.yaml -n development  