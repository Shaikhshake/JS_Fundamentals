function convertToCelsius(num)
    {
        if( typeof num === 'Nan')
        {
            console.log("not a number, try again");
            return;
        }
        let unFormattedAns = (5/9)*(num - 32);
        let FormattedAns = Math.round(unFormattedAns *100)/100;
        console.log(FormattedAns);
    }



    function convertToFahrenheit(num)
    {
        if( typeof num === 'Nan')
        {
            console.log("not a number, try again");
            return;
        }
        let unFormattedAns = (9/5)*(num) + 32;
        let FormattedAns = Math.round(unFormattedAns *100)/100;
        console.log(FormattedAns);
    }