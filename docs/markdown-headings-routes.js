export default {"Employees":{"name":"Employees","description":"<p>Markdown headings can contain HTML as well as complex markdown</p>\n<br>\n<div style=\"background-color: #F0F0F0;padding: 12px 0px 12px 12px;border-left: 5px solid #F90258;\">\n  Markdown do not support colors or fancy HTML designs. However, if you need you can put some html directly inside the markup with some inline styling.\n  This TIP box i designed using raw HTML inside the markdown\n</div>  \n<br>\n\n<h1 id=\"the-employee-object\">The Employee Object</h1>\n<p>Responses from the <code>/employees</code> endpoint are encoded as UTF-8 JSON objects with the following attributes:</p>\n<table>\n<thead>\n<tr>\n<th align=\"right\">Attribute</th>\n<th>Type</th>\n<th align=\"left\">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align=\"right\"><code>id</code></td>\n<td>string</td>\n<td align=\"left\">A globally unique identifier.</td>\n</tr>\n<tr>\n<td align=\"right\"><code>account_id</code></td>\n<td>string</td>\n<td align=\"left\">Reference to a parent account object.</td>\n</tr>\n<tr>\n<td align=\"right\"><code>thread_id</code></td>\n<td>string</td>\n<td align=\"left\">Reference to a parent thread object (all messages have a thread).</td>\n</tr>\n<tr>\n<td align=\"right\"><code>tags</code></td>\n<td>array</td>\n<td align=\"left\">A list of labels that you like to associate with an employee</td>\n</tr>\n</tbody></table>\n","isOpen":true,"items":[{"name":"/employees","path":"employees","type":"get","icon":null,"description":"Get list of employees"}]}}