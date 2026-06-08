/**
 * player_base.js - قواعد مشغل يوتيوب الأساسية
 * =============================================
 * 
 * هذا الملف يحتوي على إعدادات User-Agent وأنماط التعرف على
 * إصدارات مشغل يوتيوب المختلفة.
 * 
 * يستخدم هذا الملف لتحديث طريقة التعرف على إصدارات يوتيوب
 * عند تغيير بنية المشغل.
 */

// User-Agent الحالي لمشغل يوتيوب
const YOUTUBE_USER_AGENT = "com.google.android.youtube/19.16.39 (Linux; U; Android 14) gzip";

// أنماط التعرف على التوقيعات
const CIPHER_PATTERNS = {
    signatureFunction: /function\s+\w+\(a\)\s*\{a=a\.split\(""\)\}/,
    nsigPattern: /-[A-Za-z0-9_-]{40,50}/g,
};
