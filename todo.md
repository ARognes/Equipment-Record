Webapp using React and QR code reader
Take in pieces of equipment with barcodes, take a picture of the item,

Equipment {
 name, tags, desc, photo, price, date bought,
 job site / location,
 checked out by,
}

JobSite {
 name, tags, desc, photo, qr-code, date start, date end
 equipment (one to many)
}

User {
 name, password, credentials / fb / google
}

History {
 equipment added / removed from use
 jobsite created / removed / ended
 equipment added / removed from jobsite
 equipment lost (when jobsite ended)
}

*Download all tables option

Viewable by users or the administrator view. Users check out equipment,
administrator can see everything top-down

See all equipment by various sorting methods, jobsite, name, last checked out, last turned in, missing


X Missing
All equipment
Jobsites
Users
History

Administrator gives access to all users or no users for what they can see.


Items stored in 8 base 36 (capital letters and numbers) AA12TS34 format to allow barcode use with 12 base 10 digits.

Different equipment should require different permissions to use.

Equipment may have sub-equipment ex: Dumptruck -> { bucket, tires, computer }

##Activity Diagram

Base conditions:
  All equipment is added
  Foremen = { Josh, Rudy }
  Workers = { Andy, Smith, Bob }

Boss starts first project
  Project 1 = {
    Foremen = { Josh }
    Workers = { Andy, Smith }
    Equipment = {}
  }

  Project1 foreman Josh is given permission to check equipment out to Project 1
  Josh delegates permission to Andy to check equipment out to Project 1
  Andy delegates permission to Smith to check equipment out to Project 1
  Smith checks out Drill to Project 1 under Andy under Josh

  Display checked out to Project 1 





3/14/22

Implement tagging and subtagging system that can be converted into a folder/file system. 

Projects should be implemented

Select project from dropdown to add equipment to


Business owner may modify anything in his own business:

Admin may:
- Same as foreman
- Create/edit projects
- Delegate project editing to foreman (Time based OR project based)

Foreman may:
- Same as worker
- Create/edit equipment
- Delegate equipment editing to worker (Time based OR equipment based OR tag based)

Worker may:
- checkout equipment to project assigned to
- checkin equipment from project assigned to
