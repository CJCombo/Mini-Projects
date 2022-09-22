for(var num = 0; num < 15; num++){
    console.log(num); // prediction 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
}
for(var i = 1; i < 10; i+=2){ // 1>3, 3>5, 5>7, 7>9
    if(i % 3 == 0){
        console.log(i); // prediction 3, 9
    }
} 
for(var j = 1; j <= 15; j++){ // 1>2, 4>5, 5>6, 8>9, 10>11, 11>12, 14>15
    if(j % 2 == 0){
        j+=2; // 2>4, 6>8, 12>14
    }
    else if(j % 3 == 0){
        j++; // 9>10, 15>16
    }
    console.log(j); // prediction 1, 4, 5, 8, 10, 11, 14, 16
}

