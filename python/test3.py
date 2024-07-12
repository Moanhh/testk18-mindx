def sort_list(nums):
    l = len(nums)
    for i in range(l):
        for j in range(0, l - i - 1):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
    return nums

arr=[64, 25, 12, 22, 11]
print(sort_list(arr))  
