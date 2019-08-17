const style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing-new: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

function styleToObject(str) {

   //str = 'position: absolute;';

    let obj = {};

   let splitArr = str.split(';')
    //console.log(splitArr);
    for (var key of splitArr){
       let sliceStr = key.slice(3);
       //box-sizing: content-box
       // console.log(sliceStr);
       //let tempArr = sliceStr.split(': ')
        let indexSlice = sliceStr.indexOf(':');
        let keyOfObj = sliceStr.slice(0, indexSlice);
        //console.log(keyOfObj);
        //position:
        let valueOfKeyObj = sliceStr.slice(indexSlice + 2);
        //console.log(valueOfKeyObj);

      if (keyOfObj.indexOf('-') > 1)
      {
          //font-style
          let indexSlice = keyOfObj.indexOf('-');
          let firstValue = keyOfObj.slice(0, indexSlice);
          let secondValue = keyOfObj.slice(indexSlice + 1);
          let upperSecondChar = secondValue.toUpperCase().slice(0,1);
              secondValue = upperSecondChar + secondValue.slice(1);

          keyOfObj = firstValue + secondValue;
          console.log(keyOfObj);

         // return keyOfObj;
      }

      obj[keyOfObj] = valueOfKeyObj;

      console.log(obj);

    }






   // let count =0;
   //
   //  while (count === -1){
   //     let indexSplit =  str.indexOf(';', count);
   //
   //
   //  }


    /*
      Expected result:
      {
        position: 'absolute',
        boxSizing: 'content-box',
        ...
      }
    */
}

  console.log(styleToObject(style));

