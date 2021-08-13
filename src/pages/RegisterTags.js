import React from 'react';

function RegisterTags() {
  return (
    <div>
      <div><h1>Register Tags</h1></div>
      <table>
          <tr>
          <th>Resource:-</th>
          <td><select  name="resId"></select></td>
          </tr>
          <tr>
          <th>Tag Name:-</th>
          <td><select  name="tagId"></select></td>
          </tr>
          <tr>
          <th>Tag UOM:-</th>
          <td><input type="text" name="typeName"></input></td>
          </tr>
          <tr>
              <td>
                  <input type="submit" value="Register Tag"></input>
              </td>
          </tr>          
      </table>
    </div>
  );
}

export default RegisterTags;