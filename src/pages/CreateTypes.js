import React from 'react';

function CreateTypes() {
  return (
    <div>
      <div className="typeLable">Create Types</div>
<div className='typetable'>      
      <table>
          <tr>
          <th><div>Type ID:-</div></th>
          <td><input type="text" name="typeId" className="inputText"></input></td>
          </tr>
          <tr>
          <th><div>Type Name:-</div></th>
          <td><input type="text" name="typeName" className="inputText"></input></td>
          </tr>
          <tr>
              <td className="typeSubmit">
                  <input type="submit" value="Add Type"></input>
              </td>
          </tr>
      </table>
    </div>
    </div>
    
  );
}

export default CreateTypes;