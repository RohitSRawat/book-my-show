import { combineReducers } from "redux";
import { data } from "../components/object";
import _ from "lodash";


const book = (state = data, action) => {
  switch (action.type) {
    case "fetch":
    case "filter":
      var d = "";
      const newarray = [];
      action.payload.forEach((x, b) => {
        newarray.push(x.id);
        if (b === 0) {
          d += x.innerHTML;
        } else {
          d += "|" + x.innerHTML;
        }
      });

      console.log(_.uniq(newarray).join(""));
      var newlogic = _.uniq(newarray).join("");
      var patt = new RegExp(`${d}`);

      var ss = data.filter((x) => {
        if (newlogic == "a") {
          return patt.test(x.language);
        }
        if (newlogic == "ab") {
          return patt.test(x.language) && patt.test(x.genres);
        }

        if (newlogic == "abc") {
          return (
            patt.test(x.language) && patt.test(x.format) && patt.test(x.genres)
          );
        }
        if (newlogic == "b") {
          return patt.test(x.genres);
        }
        if (newlogic == "c") {
          return patt.test(x.format);
        }
        if (newlogic == "bc") {
          return patt.test(x.format) && patt.test(x.genres);
        }
        if (newlogic == "ac") {
          return patt.test(x.language) && patt.test(x.format);
        }
      });
      if (newlogic == "") {
        return data;
      } else {
        return ss;
      }

    default:
      return state;
  }
};
const timeing = (state = [] , action) => {
  switch(action.type){

    case 'time':
      return action.payload
      default:
       return state ;
  }
}

const seats = (state = 1,action) => {
  switch(action.type){

    case 'seats':
      return action.payload
      default:
       return state ;
  }
}

export default combineReducers({
  bookmyshow: book,
  track:timeing,
  seats
});
