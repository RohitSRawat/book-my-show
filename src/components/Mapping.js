export const Kapping = (props) => {
  return props.a[props.b].split(" ").map((x) => {
    return (
      <button
        onClick={(event) => {
          console.log(event);
          if (!event.target.className) {
            event.target.id = props.d;
            event.target.className = "active";


            filternew(props);
          } else {
            event.target.className = "";
            filternew(props);
          }
        }}
      >
        {x}
      </button>
    );
  });
};

const filternew = (props) => {
  var nodelist = document.querySelectorAll(".active");
  
  var newnodelist = [...nodelist];

  console.log(newnodelist)
  props.c(newnodelist);
  
};
