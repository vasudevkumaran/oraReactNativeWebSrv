Shopping App - Api Calls - JSON
Login
URL : http://vasudevkumaran.com/ang/login
Method: POST
Header: Content-Type: application/json
Payloads
username (A String combination of alphabets and number, its unique, acts as a ID of the user)
password: (A String combination of alphabets and number)
Callback: Handle JSON response upon getting success message from server, Save the incoming data, i.e, username
—————
Registration
URL : http://vasudevkumaran.com/ang/registration
Method: POST
Header: Content-Type: application/json
Payloads
username (A String combination of alphabets and number, System checks its unique)
password: (A String combination of alphabets and number)
firstname: (String)
lastname: (String)
gender: (1 = male, 2=female) - Single choice
is_business: 1 for selected, 2 for unselected
is_travel:1 for selected, 2 for unselected
is_holidays: 1 for selected, 2 for unselected
Callback: Handle JSON response upon getting success message from server
—————
Profile Update
URL : http://vasudevkumaran.com/ang/registrationupdate
Method: POST
Header: Content-Type: application/json
Payloads
username (String, Send the registered username saved in Device memory)
password: (A String combination of alphabets and number)
firstname: (String)
lastname: (String)
gender: (1 = male, 2=female) - Single choice
is_business: 1 for selected, 2 for unselected
is_travel:1 for selected, 2 for unselected
is_holidays: 1 for selected, 2 for unselected
Callback: Handle JSON response upon getting success message from server
—————
Add Shopping Item
URL : http://vasudevkumaran.com/ang/additem
Method: POST
Header: Content-Type: application/json
Payloads
username (String, Send the registered username saved in Device memory)
password: (String , saved in Device memory)
itemname: (String)
itemqty: (String)
itemprice: (String)
Callback: Handle JSON response upon getting success message from server
—————
—————
Edit saved Shopping Item
URL : http://vasudevkumaran.com/ang/updateitem
Method: POST
Header: Content-Type: application/json
Payloads
username (String, Send the registered username saved in Device memory)
password: (String , saved in Device memory)
itemid: (String, Retrieved from ListView Click)
itemname: (String)
itemqty: (Number)
itemprice: (Number)
Callback: Handle JSON response upon getting success message from server
—————
Get All Shopping Items
URL : http://vasudevkumaran.com/ang/getallitems
Method: POST
Header: Content-Type: application/json
Payloads
username (String, Send the registered username saved in Device memory)
password: (String , saved in Device memory)
Callback: Handle JSON response upon getting success message from server
—————
Delete an Item
URL : http://vasudevkumaran.com/ang/deleteitem
Method: POST
Header: Content-Type: application/json
Payloads
username (String, Send the registered username saved in Device memory)
password: (String , saved in Device memory)
itemid: (String, Retrieved from ListView Click)
Callback: Handle JSON response upon getting success message from server

