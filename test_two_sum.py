"""
Tests for the two_sum module

This test suite validates the find_two_sum function with various test cases
including edge cases and typical scenarios.
"""

import pytest
from src.two_sum import find_two_sum


class TestFindTwoSum:
    """Test suite for the find_two_sum function"""
    
    def test_basic_case(self):
        """Test basic case with a valid pair"""
        result = find_two_sum([2, 7, 11, 15], 9)
        assert result is not None
        assert sum(result) == 9
        assert result in [(2, 7), (7, 2)]
    
    def test_multiple_pairs(self):
        """Test case where multiple pairs exist - should return first found"""
        result = find_two_sum([1, 2, 3, 4, 5], 5)
        assert result is not None
        assert sum(result) == 5
        # Could be (1, 4) or (2, 3)
        assert result in [(1, 4), (4, 1), (2, 3), (3, 2)]
    
    def test_duplicate_values(self):
        """Test case with duplicate values that sum to target"""
        result = find_two_sum([3, 3], 6)
        assert result is not None
        assert result == (3, 3)
    
    def test_negative_numbers(self):
        """Test case with negative numbers"""
        result = find_two_sum([-1, -2, -3, -4, -5], -8)
        assert result is not None
        assert sum(result) == -8
    
    def test_mixed_positive_negative(self):
        """Test case with both positive and negative numbers"""
        result = find_two_sum([-1, 5, 3, -4], 2)
        assert result is not None
        assert sum(result) == 2
    
    def test_no_pair_found(self):
        """Test case where no valid pair exists"""
        result = find_two_sum([1, 2, 3], 10)
        assert result is None
    
    def test_empty_list(self):
        """Test edge case with empty list"""
        result = find_two_sum([], 5)
        assert result is None
    
    def test_single_element(self):
        """Test edge case with single element"""
        result = find_two_sum([5], 5)
        assert result is None
    
    def test_two_elements_valid(self):
        """Test with exactly two elements that sum to target"""
        result = find_two_sum([1, 2], 3)
        assert result is not None
        assert result in [(1, 2), (2, 1)]
    
    def test_two_elements_invalid(self):
        """Test with exactly two elements that don't sum to target"""
        result = find_two_sum([1, 2], 5)
        assert result is None
    
    def test_large_numbers(self):
        """Test with large numbers"""
        result = find_two_sum([1000000, 2000000, 3000000], 5000000)
        assert result is not None
        assert sum(result) == 5000000
    
    def test_zero_target(self):
        """Test with zero as target"""
        result = find_two_sum([-5, 5, 1, -1], 0)
        assert result is not None
        assert sum(result) == 0
    
    def test_zero_in_list(self):
        """Test with zero in the list"""
        result = find_two_sum([0, 4, 3, 0], 0)
        assert result is not None
        assert result == (0, 0)
    
    def test_all_same_values_valid(self):
        """Test with all same values that can form target"""
        result = find_two_sum([2, 2, 2, 2], 4)
        assert result is not None
        assert result == (2, 2)
    
    def test_all_same_values_invalid(self):
        """Test with all same values that cannot form target"""
        result = find_two_sum([2, 2, 2, 2], 5)
        assert result is None
    
    def test_ordering_consistency(self):
        """Test that the function returns consistent ordering"""
        result = find_two_sum([10, 1, 9, 2], 11)
        assert result is not None
        assert sum(result) == 11
        # Should maintain smaller value first
        assert result[0] <= result[1]
