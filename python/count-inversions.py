def countInversions(list):
	if len(list) == 1:
		return list, 0;
	else:
		middle = int(len(list)/2)
		A = list[:middle]
		B = list[middle:]

		left, a = countInversions(A)
		right, b = countInversions(B)
		result, c = countSplitInversions(left, right)

		return result, a + b + c

def countSplitInversions(A, B):
	# Copies from right array before left array represent a split inversions 
	# of inversions represented by number of items remaing in left array)
	n = len(A) + len(B)
	sorted = []
	inversions = 0
	for i in xrange(0, n):
		if len(A) == 0:
			sorted.append(B[0])
			del(B[0])
		elif len(B) == 0:
			sorted.append(A[0])
			del(A[0])
		elif A[0] < B[0]:
			sorted.append(A[0])
			#Remove first element from array
			del(A[0])
		else:
			sorted.append(B[0])
			del(B[0])
			inversions += len(A)
		i+=1
	# print sorted
	return sorted, inversions
	
print countInversions(integers)[1]