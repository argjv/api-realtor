# api-realtor
## API Realtor
In order to store the data correctly, an docker instance running MongoDB needs to run on the development environment.
Run the following command to initiate the MongoDB docker instance:
```bash
mkdir data
sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo
```
