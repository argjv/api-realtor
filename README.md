# api-realtor
## API Realtor
In order to store data correctly, a docker instance running MongoDB is needed on the development environment.

___
*Prerequisites*
___
Docker should be installed on the host machine. Digital Ocean has a great tutorial on [How To Install and Use Docker on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04).

Run the following command to initiate the MongoDB docker instance:
```bash
mkdir data
sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo
```
