package bcommon

import "sort"

type Role struct {
	Name        string
	Exclusivity uint
	Level       uint
	Permissions []string
}

// Dominates returns true if one role takes precedent over another. This is not
// necessarily that the role has greater permissions.
func (r *Role) Dominates(other *Role) bool {
	if r.Exclusive() || r.Exclusive() {
		return r.Exclusivity > other.Exclusivity
	}
	return r.Level > other.Level
}

// Exclusive returns true if the role has a non-zero exclusivity.
func (r *Role) Exclusive() bool {
	return r.Exclusivity > 0
}

type roleList []*Role

func (a roleList) Len() int           { return len(a) }
func (a roleList) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a roleList) Less(i, j int) bool { return a[j].Dominates(a[i]) }

// GetPermissions resolves a list of roles to a set of permissions a user
// with those roles has.
func GetPermissions(roles ...*Role) []string {
	count := len(roles)
	if count == 0 {
		return nil
	}

	sort.Sort(roleList(roles))

	// If the first item in the list has an exclusivity, that's
	// all we need. Otherwise go down and merge permissions.
	if roles[count-1].Exclusive() {
		return roles[count-1].Permissions
	}

	// Otherwise just join together all the permissions
	out := make([]string, 0, 32)
	for _, role := range roles {
		out = append(out, role.Permissions...)
	}

	return out
}
