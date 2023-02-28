let i = parseInt(prompt('Enter a # to start the countdown:'));

if (isNaN( i )){
    alert('That input is invalid.  Try again.');
}else if( i >=0 ){

    for( i; i >= 0; i--){
        console.log( i );
    }

}else{
    console.log('An error has occurred.');
};



// Countdown

// Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on. 