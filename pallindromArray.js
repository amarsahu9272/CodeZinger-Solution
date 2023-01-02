
    function isPalindrome(n) {
        // Find the appropriate divisor
        // to extract the leading digit
        var divisor = 1;
        while (parseInt(n / divisor) >= 10)
            divisor *= 10;
 
        while (n != 0) {
            var leading = parseInt(n / divisor);
            console.log(leading)
            var trailing = n % 10;
            console.log(trailing)
 
            // If first and last digit
            // not same return false
            if (leading != trailing)
                return false;
 
            // Removing the leading and trailing
            // digit from number
            n = parseInt((n % divisor) / 10);
            console.log(n)
 
            // Reducing divisor by a factor
            // of 2 as 2 digits are dropped
            divisor = divisor / 100;
            console.log(divisor)
        }
        return true;
    }

        if (isPalindrome(1011))
            console.log("Yes, it is Palindrome");
        else
        console.log("No, not Palindrome");