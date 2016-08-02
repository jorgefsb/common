package bcommon

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestLevelBoundaries(t *testing.T) {
	assert.Equal(t, uint(0), GetXP(1))
	assert.Equal(t, uint(14), GetXP(2))
	assert.Equal(t, uint(27), GetXP(3))
}

func TestXPTranslations(t *testing.T) {
	assert.Equal(t, uint(1), GetLevel(0))
	assert.Equal(t, uint(1), GetLevel(10))
	assert.Equal(t, uint(1), GetLevel(13))
	assert.Equal(t, uint(2), GetLevel(14))
	assert.Equal(t, uint(2), GetLevel(20))
	assert.Equal(t, uint(2), GetLevel(26))
	assert.Equal(t, uint(3), GetLevel(27))
}
