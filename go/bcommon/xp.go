package bcommon

// GetLevel returns the level that a user with the provided amount of XP has.
func GetLevel(xp uint) (level uint) {
	for level := 1; level < len(xpTable); level++ {
		if xpTable[level] > xp {
			return uint(level - 1)
		}
	}

	return uint(len(xpTable))
}

// GetXP returns the experience needed for a provided level.
func GetXP(level uint) (xp uint) {
	if int(level) > len(xpTable) {
		return xpTable[len(xpTable)-1]
	}

	return xpTable[int(level)]
}
