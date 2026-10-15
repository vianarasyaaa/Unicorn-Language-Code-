# Recipe: WhatsApp Bot Adapter

Contoh layer konseptual di antara event bot dan aplikasi:

```unicorn
whatsapp::adapter, :"BAILEYS", :wa:
whatsapp::saat_pesan, :wa:, :on_message:
    input::normalisasi, :message:, :normalized:
    command::dispatch, :normalized:, :result:
    whatsapp::send_safe, :wa:, :message.chat:, :result:
:selesai
```

Ini bukan implementasi Baileys dan bukan jaminan semua tipe message/interactive flow didukung. Binding nyata harus menyesuaikan versi Baileys tunggal yang dipilih, kontrak event, reconnect, session persistence, dan kebijakan penggunaan WhatsApp.
