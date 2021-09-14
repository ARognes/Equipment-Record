# Equipment-Record
## About
  This is a web-app that keeps records of where equipment has gone, who has it, and more.
  I intend to make this private soon...
  

## Functionality
* Equipment may be checked out a project.
* Each project has 1 or more foremen.
* Foremen and their delegates are allowed to check in and out equipment for only their project.
* Records of who checked out what, where from, where to, and when are recorded and kept for future reference.
* QR-codes and barcodes may be downloaded by authorized users (Boss and Foremen) to create labels.
  
* Everything is namespaced under a business name so multiple businesses may use this web-app.


## Later TODO's (small things)
- [x] Load small images of the equipment, if user requests full images then they will be loaded.
- [ ] [exif-js](https://github.com/exif-js/exif-js) When getting qr-code, access location metadata of picture and save to firestore
- [ ] [qrious](https://github.com/neocotic/qrious) Use this to give the user printable qr-codes
- [ ] Find barcode printing js library 