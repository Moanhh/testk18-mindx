def check_palindrome(s):
    s = s.lower().replace(' ', '')
    left= 0;
    right = len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

print(check_palindrome("wow"))     
print(check_palindrome("anna"))   
print(check_palindrome("tomato"))  