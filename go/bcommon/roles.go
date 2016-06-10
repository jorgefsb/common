// AUTOGENERATED FILE, DO NOT EDIT

package bcommon

var (
	Banned = &Role{
		Name:        "Banned",
		Exclusivity: 10,
		Level:       0,
		Permissions: []string{},
	}
	User = &Role{
		Name:        "User",
		Exclusivity: 0,
		Level:       10,
		Permissions: []string{
			AchievementView + ":self",
			ChannelAnalytics + ":self",
			ChannelCostream + ":self",
			ChannelDetails + ":self",
			ChannelFollow + ":self",
			ChannelPartnership + ":self",
			ChannelStreamKey + ":self",
			ChannelUpdate + ":self",
			ChatChat,
			ChatConnect,
			ChatPollVote,
			InvoiceView + ":self",
			LogView + ":self",
			MessagesCreate + ":self",
			MessagesDelete + ":self",
			MessagesRead + ":self",
			MessagesReply + ":self",
			NotificationUpdate + ":self",
			NotificationView + ":self",
			OauthAuthorize + ":self",
			OauthManage + ":self",
			OauthManageApps + ":self",
			RecordingManage + ":self",
			RedeemableCreate + ":self",
			RedeemableRedeem + ":self",
			RedeemableView + ":self",
			ResourceDelete + ":self",
			ResourceFind + ":self",
			ShopCheckout,
			SubscriptionCancel + ":self",
			SubscriptionCreate + ":self",
			SubscriptionRenew + ":self",
			SubscriptionView + ":self",
			TeamManage + ":self",
			TetrisManage + ":self",
			TetrisPlay,
			TetrisRobot + ":self",
			TransactionCancel + ":self",
			TransactionView + ":self",
			UserAnalytics + ":self",
			UserDelete + ":self",
			UserDetails + ":self",
			UserGetDiscordInvite + ":self",
			UserLog + ":self",
			UserSeen + ":self",
			UserTwofactor + ":self",
			UserUpdate + ":self",
		},
	}
	Pro = &Role{
		Name:        "Pro",
		Exclusivity: 0,
		Level:       11,
		Permissions: []string{},
	}
	Subscriber = &Role{
		Name:        "Subscriber",
		Exclusivity: 0,
		Level:       12,
		Permissions: []string{},
	}
	ChannelEditor = &Role{
		Name:        "ChannelEditor",
		Exclusivity: 0,
		Level:       0,
		Permissions: []string{
			ChannelUpdate,
		},
	}
	Mod = &Role{
		Name:        "Mod",
		Exclusivity: 0,
		Level:       50,
		Permissions: []string{
			ChatBypassLinks,
			ChatBypassSlowchat,
			ChatChangeBan,
			ChatClearMessages,
			ChatGiveawayStart,
			ChatPollStart,
			ChatPollVote,
			ChatRemoveMessage,
			ChatTimeout,
		},
	}
	GlobalMod = &Role{
		Name:        "GlobalMod",
		Exclusivity: 0,
		Level:       60,
		Permissions: []string{
			ChannelSuspend,
			ChatBypassLinks,
			ChatBypassSlowchat,
			ChatChangeBan,
			ChatClearMessages,
			ChatGiveawayStart,
			ChatPollStart,
			ChatPollVote,
			ChatRemoveMessage,
			ChatTimeout,
			ChatViewLurkers,
		},
	}
	Owner = &Role{
		Name:        "Owner",
		Exclusivity: 80,
		Level:       100,
		Permissions: []string{
			AchievementView + ":self",
			ChannelAnalytics + ":self",
			ChannelCostream + ":self",
			ChannelDetails + ":self",
			ChannelFollow + ":self",
			ChannelPartnership + ":self",
			ChannelStreamKey + ":self",
			ChannelUpdate + ":self",
			ChatBypassLinks,
			ChatBypassSlowchat,
			ChatChangeBan,
			ChatChangeRole,
			ChatChat,
			ChatClearMessages,
			ChatConnect,
			ChatEditOptions,
			ChatGiveawayStart,
			ChatPollStart,
			ChatPollVote,
			ChatRemoveMessage,
			ChatTimeout,
			InvoiceView + ":self",
			LogView + ":self",
			MessagesCreate + ":self",
			MessagesDelete + ":self",
			MessagesRead + ":self",
			MessagesReply + ":self",
			NotificationUpdate + ":self",
			NotificationView + ":self",
			OauthAuthorize + ":self",
			OauthManage + ":self",
			OauthManageApps + ":self",
			RecordingManage + ":self",
			RedeemableCreate + ":self",
			RedeemableRedeem + ":self",
			RedeemableView + ":self",
			ResourceDelete + ":self",
			ResourceFind + ":self",
			ShopCheckout,
			SubscriptionCancel + ":self",
			SubscriptionCreate + ":self",
			SubscriptionRenew + ":self",
			SubscriptionView + ":self",
			TeamManage + ":self",
			TetrisManage + ":self",
			TetrisPlay,
			TetrisRobot + ":self",
			TransactionCancel + ":self",
			TransactionView + ":self",
			UserAnalytics + ":self",
			UserDelete + ":self",
			UserDetails + ":self",
			UserGetDiscordInvite + ":self",
			UserLog + ":self",
			UserSeen + ":self",
			UserTwofactor + ":self",
			UserUpdate + ":self",
		},
	}
	Founder = &Role{
		Name:        "Founder",
		Exclusivity: 20,
		Level:       120,
		Permissions: []string{
			AchievementView,
			AnnouncementCreate,
			ChannelAnalytics + ":self",
			ChannelCostream + ":self",
			ChannelDetails + ":self",
			ChannelFollow + ":self",
			ChannelPartnership,
			ChannelStreamKey + ":self",
			ChannelSuspend,
			ChannelUpdate,
			ChatBypassLinks,
			ChatBypassSlowchat,
			ChatChangeBan,
			ChatChangeRole,
			ChatChat,
			ChatClearMessages,
			ChatConnect,
			ChatEditOptions,
			ChatGiveawayStart,
			ChatPollStart,
			ChatPollVote,
			ChatRemoveMessage,
			ChatTimeout,
			ChatViewLurkers,
			InvoiceView + ":self",
			LogView + ":self",
			MessagesCreate + ":self",
			MessagesDelete + ":self",
			MessagesRead + ":self",
			MessagesReply + ":self",
			NotificationUpdate + ":self",
			NotificationView + ":self",
			OauthAuthorize + ":self",
			OauthManage + ":self",
			OauthManageApps + ":self",
			PartnershipManage,
			RecordingManage + ":self",
			RedeemableCreate + ":self",
			RedeemableRedeem + ":self",
			RedeemableView + ":self",
			ResourceDelete + ":self",
			ResourceFind + ":self",
			ShopCheckout,
			SubscriptionCancel + ":self",
			SubscriptionCreate + ":self",
			SubscriptionRenew + ":self",
			SubscriptionView + ":self",
			TeamManage + ":self",
			TetrisManage,
			TetrisPlay,
			TetrisReview,
			TetrisRobot + ":self",
			TransactionCancel + ":self",
			TransactionView + ":self",
			UserAnalytics + ":self",
			UserDelete + ":self",
			UserDetails,
			UserGetDiscordInvite + ":self",
			UserLog,
			UserSeen + ":self",
			UserTwofactor,
			UserUpdate,
		},
	}
	Staff = &Role{
		Name:        "Staff",
		Exclusivity: 30,
		Level:       110,
		Permissions: []string{
			AchievementView,
			AnnouncementCreate,
			ChannelAnalytics + ":self",
			ChannelCostream + ":self",
			ChannelDetails + ":self",
			ChannelFollow + ":self",
			ChannelPartnership,
			ChannelStreamKey + ":self",
			ChannelSuspend,
			ChannelUpdate,
			ChatBypassLinks,
			ChatBypassSlowchat,
			ChatChangeBan,
			ChatChangeRole,
			ChatChat,
			ChatClearMessages,
			ChatConnect,
			ChatEditOptions,
			ChatGiveawayStart,
			ChatPollStart,
			ChatPollVote,
			ChatRemoveMessage,
			ChatTimeout,
			ChatViewLurkers,
			InvoiceView + ":self",
			LogView + ":self",
			MessagesCreate + ":self",
			MessagesDelete + ":self",
			MessagesRead + ":self",
			MessagesReply + ":self",
			NotificationUpdate + ":self",
			NotificationView + ":self",
			OauthAuthorize + ":self",
			OauthManage + ":self",
			OauthManageApps + ":self",
			PartnershipManage,
			RecordingManage + ":self",
			RedeemableCreate + ":self",
			RedeemableRedeem + ":self",
			RedeemableView + ":self",
			ResourceDelete + ":self",
			ResourceFind + ":self",
			ShopCheckout,
			SubscriptionCancel + ":self",
			SubscriptionCreate + ":self",
			SubscriptionRenew + ":self",
			SubscriptionView + ":self",
			TeamManage + ":self",
			TetrisManage,
			TetrisPlay,
			TetrisReview,
			TetrisRobot + ":self",
			TransactionCancel + ":self",
			TransactionView + ":self",
			UserAnalytics + ":self",
			UserDelete + ":self",
			UserDetails,
			UserGetDiscordInvite + ":self",
			UserLog,
			UserSeen + ":self",
			UserTwofactor,
			UserUpdate,
		},
	}
	TeamLeader = &Role{
		Name:        "TeamLeader",
		Exclusivity: 0,
		Level:       50,
		Permissions: []string{
			TeamAdminister,
		},
	}
)

const (
	AchievementView      = "achievement:view"
	AnnouncementCreate   = "announcement:create"
	ChannelAnalytics     = "channel:analytics"
	ChannelCostream      = "channel:costream"
	ChannelDetails       = "channel:details"
	ChannelFollow        = "channel:follow"
	ChannelPartnership   = "channel:partnership"
	ChannelStreamKey     = "channel:streamKey"
	ChannelSuspend       = "channel:suspend"
	ChannelUpdate        = "channel:update"
	ChatBypassLinks      = "chat:bypass_links"
	ChatBypassSlowchat   = "chat:bypass_slowchat"
	ChatChangeBan        = "chat:change_ban"
	ChatChangeRole       = "chat:change_role"
	ChatChat             = "chat:chat"
	ChatClearMessages    = "chat:clear_messages"
	ChatConnect          = "chat:connect"
	ChatEditOptions      = "chat:edit_options"
	ChatGiveawayStart    = "chat:giveaway_start"
	ChatPollStart        = "chat:poll_start"
	ChatPollVote         = "chat:poll_vote"
	ChatRemoveMessage    = "chat:remove_message"
	ChatTimeout          = "chat:timeout"
	ChatViewLurkers      = "chat:view_lurkers"
	InvoiceView          = "invoice:view"
	LogView              = "log:view"
	MessagesCreate       = "messages:create"
	MessagesDelete       = "messages:delete"
	MessagesRead         = "messages:read"
	MessagesReply        = "messages:reply"
	NotificationUpdate   = "notification:update"
	NotificationView     = "notification:view"
	OauthAuthorize       = "oauth:authorize"
	OauthManage          = "oauth:manage"
	OauthManageApps      = "oauth:manageApps"
	PartnershipManage    = "partnership:manage"
	RecordingManage      = "recording:manage"
	RedeemableCreate     = "redeemable:create"
	RedeemableRedeem     = "redeemable:redeem"
	RedeemableView       = "redeemable:view"
	ResourceDelete       = "resource:delete"
	ResourceFind         = "resource:find"
	ShopCheckout         = "shop:checkout"
	SubscriptionCancel   = "subscription:cancel"
	SubscriptionCreate   = "subscription:create"
	SubscriptionRenew    = "subscription:renew"
	SubscriptionView     = "subscription:view"
	TeamAdminister       = "team:administer"
	TeamManage           = "team:manage"
	TetrisManage         = "tetris:manage"
	TetrisPlay           = "tetris:play"
	TetrisReview         = "tetris:review"
	TetrisRobot          = "tetris:robot"
	TransactionCancel    = "transaction:cancel"
	TransactionView      = "transaction:view"
	UserAnalytics        = "user:analytics"
	UserDelete           = "user:delete"
	UserDetails          = "user:details"
	UserGetDiscordInvite = "user:getDiscordInvite"
	UserLog              = "user:log"
	UserSeen             = "user:seen"
	UserTwofactor        = "user:twofactor"
	UserUpdate           = "user:update"
)

var RoleMap = map[string]*Role{
	"Banned":        Banned,
	"User":          User,
	"Pro":           Pro,
	"Subscriber":    Subscriber,
	"ChannelEditor": ChannelEditor,
	"Mod":           Mod,
	"GlobalMod":     GlobalMod,
	"Owner":         Owner,
	"Founder":       Founder,
	"Staff":         Staff,
	"TeamLeader":    TeamLeader,
}
