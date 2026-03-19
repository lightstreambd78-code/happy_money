const firebaseConfig = {
    apiKey: "AIzaSyAOIw_F9fqhfquSWmlMo71P3wuiOx1yms4",
      authDomain: "happymoney-3d353.firebaseapp.com",
      databaseURL: "https://happymoney-3d353-default-rtdb.firebaseio.com",
      projectId: "happymoney-3d353",
      storageBucket: "happymoney-3d353.firebasestorage.app",
      messagingSenderId: "518372624635",
      appId: "1:518372624635:web:e48e1487bcbc9fb36f885e",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    
    var alluser = firebase.database().ref().child("admin").child('super_asdmin');
    
    
    
    
    var admin = '';
    var pass = '';
    
  
  
  
  
  alluser.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
  
        admin = snapshot4.val().username;
         pass = snapshot4.val().password ;
  
  
  
  
  
      }
  
      console.log('admin :'+admin);

  
      $('#bkas').val(admin);
      $('#nog').val(pass);
    
  
  
    });
  
  
    function validate() {
  
      var bkas  = document.getElementById("bkas").value;
      var nog = document.getElementById("nog").value;
   
      
    
    
      var ref10 = firebase.database().ref().child("admin");
    
      var didConfirm = confirm("Are you sure You want to submit??");
      if (didConfirm == true) {
    
        ref10.child('super_asdmin').set({
          "username": bkas,
          "password": nog,

        
          
    
        });
    
    
        location.reload();
        
    
    
      } else {
        return false;
      }
    
    
    
    
    
    }
    
    
    
    
    
  
  
    
    
    
    
  
  
    
    
  
    
  
    
  
  