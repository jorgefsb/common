package bcommon

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetPermissions(t *testing.T) {
	assert.Len(t, GetPermissions(Banned, User), 0)
	assert.Len(t, GetPermissions(Banned, User, Staff), len(Staff.Permissions))
	assert.Len(t, GetPermissions(User, Mod), len(User.Permissions)+len(Mod.Permissions))
}
