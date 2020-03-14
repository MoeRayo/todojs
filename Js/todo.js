<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- 
        Installation of bootstrap and fontawesome
    -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">



</head>
<body>
    <div class="container">
        <div class="display-4">TODO LIST </div>
            <div class="alert alert-danger col-6" id="message" style="display: none">

            </div>
            <div class="text-info col-6">
                <input type="text" placeholder="Enter to do title here..." id="todoItem" class="form-control" /><br>
                <textarea rows="5" class="form-control" id="todoDescription" placeholder="Your to do description here..."></textarea>
                <label>
                    Is this task urgent?
                </label>
                <input type="text" placeholder="Enter your response here..." id="todoResponse" class="form-control" /><br>
                
                
                <!-- <p>Is this task urgent?<span id="choice-result"></span></p>
                <div class="form-group">
                    <div class="form-check">
                            <input class="form-check-input" type="radio" id="yes-choice" name="choice" value="yes" checked> 
                            <label class="form-check-label" for="yes-choice">
                                Yes
                            </label>
                    </div>
                    <div class="form-check">
                            <input class="form-check-input" type="radio" id="no-choice" name="choice" value="no">
                            <label class="form-check-label" for="no-choice">
                                No
                            </label>
                    </div>
                </div>
             -->
                <button onclick="addItem()" class="btn btn-sm btn-primary">
                    <span class="fa fa-plus"></span> add new item
                </button>
            </div>
            <!-- <div class="col-5 bg-primary rounded-left rounded-lg" >

            </div> -->
       <div class="row">
                
               
                    <ol class="col-6 list-group list-group-flush" id="sidebar">
                        <li class="list-group-item">Important items appear here...
                            <button onclick="deleteItem(this)" class="text-danger" title="delete this todo">
                                <span class="fa fa-trash"></span>
                             </button> 
                            <button onclick="completeItem(this)" class="text-success" title="complete this todo">
                                <span class="fa fa-check"></span>
                            </button>
                        </li>
                    </ol>
                    <ul class="col-6 list-group list-group-flush" id="todoList">
                        <!-- I left this here to show the template before it was moved to the js function -->
                            <li class="list-group-item">Less important items appear here...
                                <button onclick="deleteItem(this)" class="text-danger" title="delete this todo">
                                    <span class="fa fa-trash"></span>
                                 </button> 
                                <button onclick="completeItem(this)" class="text-success" title="complete this todo">
                                    <span class="fa fa-check"></span>
                                </button>
                            </li>
                        </ul> 
    
               
              
       </div>
        
    </div>
    <!--linking to external javascript-->
    <script src="js/todo.js"></script>
</body>
</html>
