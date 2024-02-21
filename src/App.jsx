import Assign1 from "./Assignment/Assign1";
import "./App.css";

function App(){
    return(
        <>
        <div id="BOX">
        <div id="container">
        <div id="box1">
        <Assign1 title="sundar pichai" age={48} career="CEO OF GOOGLE"image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCAlFqo7hVaMbqmKc50ml2-x3VM0wmO4nFy30egmo8g&s"/>
        </div>
        <div id="box2">
        <Assign1 title="Shri Narendra modi" age={67} career="PRIMEMINSTER OF INDIA" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3tt2QdkGYJ1268iokp1HHB3XB6PNaAZD_pssz3zFVg&s"/></div>
        <div id="box1">
        <Assign1 title="Bill gates" age={65} career="FOUNDER OF MICROSOFT" image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxD7xaCueBtFmw3MV700I7uOXPi3OjSTeXBVXcZMbgzK5kX9MHLdiyGSKg-A&s"/></div>
        
            </div>
           

        <div id="container2">
             <div id="box4">
        <Assign1 title="Markzukarbarg" age={40} career="CEO OF META" image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXne6RwL8OaPoxBbe8UXiuDBbBlmDRz2FQJ4SeJgxkQ&s"/></div>
        <div id="box5">
        <Assign1 title="Sachin tendulkar" age={70} career="GOD OF CRICKET" image ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/220px-Sachin-Tendulkar_%28cropped%29.jpg" height="120px" width="120px"/></div>
        </div>
        </div>
        </>
    );
}

export default App;