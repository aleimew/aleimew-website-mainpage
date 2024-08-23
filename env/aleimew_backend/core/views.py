from django.shortcuts import render 
from rest_framework.views import APIView 
from . models import *
from rest_framework.response import Response 
from . serializer import *
from django.http import HttpResponseRedirect
from django.urls import reverse
# Create your views here. 
  
class ReactView(APIView): 
    
    serializer_class = ReactSerializer 

    def index(request):
        names = ReactSerializer.object.all().values()
        context = {
            'names': names,
        }
  
    def get(self, request): 
        detail = [ {"name": detail.name,"detail": detail.detail}  
        for detail in React.objects.all()] 
        return Response(detail) 
  
    def post(self, request): 
  
        serializer = ReactSerializer(data=request.data) 
        if serializer.is_valid(raise_exception=True): 
            serializer.save() 
            return  Response(serializer.data) 
    
    #attempted to make delete function to delete unwanted items 
    # but its still a work in progress   
    
    #def delete(request, id): 
    #    item = ReactSerializer.object.get(id=id)
    #    item.delete()
    #    return HttpResponseRedirect(reverse('index'))
        