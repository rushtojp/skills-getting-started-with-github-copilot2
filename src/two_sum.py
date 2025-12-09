"""
Two Sum Function

This module provides an efficient function to find two integers in a list
that sum to a target value.
"""

from typing import List, Optional, Tuple


def find_two_sum(nums: List[int], target: int) -> Optional[Tuple[int, int]]:
    """
    Find two integers in a list that sum to a target value.
    
    This function uses a hash-based approach for O(n) time complexity.
    It handles various edge cases including empty lists, single elements,
    and cases where no valid pair exists.
    
    Args:
        nums: A list of integers to search through
        target: The target sum to find
    
    Returns:
        A tuple of two integers that sum to the target, or None if no such pair exists.
        If multiple pairs exist, returns the first valid pair found.
    
    Examples:
        >>> find_two_sum([2, 7, 11, 15], 9)
        (2, 7)
        
        >>> find_two_sum([3, 2, 4], 6)
        (2, 4)
        
        >>> find_two_sum([3, 3], 6)
        (3, 3)
        
        >>> find_two_sum([1, 2, 3], 10)
        None
    """
    # Edge case: empty list or single element
    if not nums or len(nums) < 2:
        return None
    
    # Use a hash map to store values we've seen and their indices
    seen = {}
    
    for num in nums:
        complement = target - num
        
        # Check if the complement exists in our seen map
        if complement in seen:
            # Return the pair (smaller value first for consistency)
            return (complement, num) if complement <= num else (num, complement)
        
        # Add current number to seen map
        seen[num] = True
    
    # No valid pair found
    return None
