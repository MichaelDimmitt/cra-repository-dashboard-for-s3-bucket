## What does it do?
Drag and drop for organizing github projects ...
see the prototype on the [s3bucket](http://repository-dashboard.s3-website-us-east-1.amazonaws.com/)

## Installation Instructions:
1) clone the project
2) npm install
3) npm run start
4) open https://www.localhost:3000
5) check the terminal if you are already running on port 3000.
6) deploying to s3: `npm run build && aws s3 sync build/ s3://repository-dashboard`

Regards, Michael Dimmitt

Draggand Drop outsourced:
<br/>option 1: current implementation ([react-sortable-hoc](https://github.com/clauderic/react-sortable-hoc) )
<br/>option 2: ([react-dnd](https://github.com/react-dnd/react-dnd) )

