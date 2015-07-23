# You are given as input an unsorted array of n distinct numbers, 
# where n is a power of 2. 
# Give an algorithm that identifies the second-largest number in the array, 
# and that uses at most n + log2n - 2 comparisons.

A = [4, 512, 8, 64, 16, 2, 32, 256] # Uses at most 9 comparisons

# def second_largest (Array):
# 	divided = merge_split(Array)

# 	print divided

# def merge_split (Array) :
# 	left = Array[:len(Array)/2]
# 	right = Array[len(Array)/2:]

# 	if(len(left) > 1):
# 		left = merge_split(left)
	
# 	if(len(right) > 1):
# 		right = merge_split(right)

# 	return [left, right]

# def merge (left, right, result) :
# 	if left[0] < right[0]:
# 		result.append(left[0])
# 	else:
# 		result.append(right[0])
# 	return result

def mergesort(aList):
 	return _mergesort( aList, 0, len( aList ) - 1 )
 
 
def _mergesort( aList, first, last ):
  # break problem into smaller structurally identical pieces
  mid = ( first + last ) / 2
  if first < last:
    _mergesort( aList, first, mid )
    _mergesort( aList, mid + 1, last )
 
  # merge solved pieces to get solution to original problem
  a, f, l = 0, first, mid + 1
  tmp = [None] * ( last - first + 1 )
 
  while f <= mid and l <= last:
    if aList[f] < aList[l] :
      tmp[a] = aList[f]
      f += 1
    else:
      tmp[a] = aList[l]
      l += 1
    a += 1
 
  if f <= mid :
    tmp[a:] = aList[f:mid + 1]
 
  if l <= last:
    tmp[a:] = aList[l:last + 1]
 
  a = 0
  while first <= last:
    aList[first] = tmp[a]
    first += 1
    a += 1

  return aList  

# second_largest(A)
print mergesort(A)